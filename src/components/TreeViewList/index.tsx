import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Checkbox from 'react-native-checkbox';
import {styles} from './styles';
import {Node, TreeViewListProps} from '../../models/interfaces';

export const TreeViewList: React.FC<TreeViewListProps> = ({data}) => {
  const [nodes, setNodes] = React.useState<Node[]>(data);

  const getUniqueActiveNodeNames = (List: Node[]): string[] => {
    let activeNodeNames: Set<string> = new Set();

    const findActiveNodes = (Nodes: Node[]) => {
      Nodes.forEach(node => {
        if (node?.active) {
          activeNodeNames.add(node.name);
        }
        if (node.children) {
          findActiveNodes(node.children);
        }
      });
    };

    findActiveNodes(List);
    return Array.from(activeNodeNames);
  };
  const isAllChildrenMarked = (
    Nodes: Node[] | [],
    node: Node,
    nodeId: string,
  ): boolean => {
    if (node.id !== nodeId) {
      return !!node.marked;
    } else if (Nodes.length === 0) {
      return !node.marked;
    } else {
      return Nodes.filter(item => item.marked).length === Nodes.length;
    }
  };
  const toggleNodeActive = (nodeId: string) => {
    const toggle = (Nodes: Node[]): Node[] =>
      Nodes.map(node => {
        const isActive = node.id === nodeId ? !node.active : node.active;
        return {
          ...node,
          active: isActive,
          marked: isAllChildrenMarked(node.children || [], node, nodeId),
          children: node.children ? toggle(node.children) : [],
        };
      });

    let updatedNodes = toggle(nodes);
    setNodes(updatedNodes);
  };

  const renderTree = (Nodes: Node[]): JSX.Element[] =>
    Nodes.map(node => (
      <View key={node.id.toString()} style={styles.nodeContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Checkbox
            testID={`checkbox-${node.name}`}
            label=""
            checked={node.marked}
            onChange={() => toggleNodeActive(node.id)} // Toggle active state on change
            style={styles.checkbox}
          />
          <TouchableOpacity
            onPress={() => toggleNodeActive(node.id)}
            style={styles.nodeButton}>
            <Text style={styles.nodeText}>{node.name}</Text>
          </TouchableOpacity>
        </View>
        {node.active && node.children && (
          <View style={styles.childrenContainer}>
            {renderTree(node.children)}
          </View>
        )}
      </View>
    ));

  const uniqueActiveNodeNames = getUniqueActiveNodeNames(nodes);

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={{paddingVertical: 100}}>
      <View style={styles.container}>{renderTree(nodes)}</View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {uniqueActiveNodeNames.map((elemnt, index) => (
          <View key={index.toString()}>
            <Text style={{marginHorizontal: 5}}>{elemnt}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
