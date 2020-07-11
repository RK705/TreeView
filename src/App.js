import React from 'react';
import { Route, Link, Router} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import data from './data.js';
import './App.css';

const useStyles = makeStyles({
  root: {
    height: 400,
    flexGrow: 1,
    maxWidth: 300,
  },
});

export default function RecursiveTreeView() {
  const classes = useStyles();

  const renderTree = (nodes) => (
  
 <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.text} links = {nodes.link}>
      {Array.isArray(nodes.items) ? nodes.items.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <>
    <div className="nav">Tree_View</div>
    <div className="main">
    <div className="sidebar">
     <h3>Data Structures</h3>
     <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon 
     />}
    >
    {renderTree(data)}
    
    </TreeView>
    </div>
    <div className="right">
      
    </div>
    </div>
    </>
  );
}