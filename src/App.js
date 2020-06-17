import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ListGroup, ListGroupItem, ListGroupItemHeading } from "shards-react";
import Drawer from "./components/Drawer";
import PopUp from "./components/PopUp";
import BottomBar from "./components/BottomBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    height: 150,
    paddingTop: 60,
    paddingLeft: 30,
  },
  drawHeader: {
    height: 150,
    padding: 20,
  },
  headerText: {
    color: "#FFFFFF",
    padding: 15,
    marginBottom: 40,
  },
  searchBar: {
    width: 200,
    color: "#FFFFFF",
    marginBottom: 20,
  },
  listHeader: {
    margin: 10,
  },
  listItem: {
    marginBottom: 10,
  },
  fab: {
    width: 50,
    padding: 12,
    paddingLeft: 5,
    paddingRight: 5,
  },
  bodyBottomBar: {
    padding: 23,
  },
  bodyList: {
    width: "100%",
    padding: 20,
    height: "79vh",
  },
  input: {
    color: "#C9D0D3",
  },
}));

function App() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  const [bucket, setBucket] = React.useState([]);
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const [isOpenCreateTask, setIsOpenCreateTask] = React.useState(false);
  const [isOpenCreateBucket, setIsOpenCreateBucket] = React.useState(false);
  const [text, setText] = React.useState("");

  const handleTextOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClickFab = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleOpenCreateBucket = () => {
    setIsOpenCreateBucket(!isOpenCreateBucket);
  };

  const handleOpenCreateTask = () => {
    setIsOpenCreateTask(!isOpenCreateTask);
  };

  const handleCreateBucket = () => {
    if (text !== "") {
      setBucket([...bucket, { title: text, tasks: [] }]);
      handleOpenCreateBucket();
    }
  };

  const handleCreateTask = () => {
    if (text !== "") {
      bucket[index].tasks = [...bucket[index].tasks, { content: text }];
      setBucket([...bucket]);
      handleOpenCreateTask();
    }
  };

  const handleMenuOnClick = (i) => () => {
    setIndex(i);
  };

  return (
    <div>
      <Grid container direction="row" className={classes.root}>
        <Drawer classes={classes} bucket={bucket} handleMenuOnClick={handleMenuOnClick} />
        <Grid item xs={10} style={{ backgroundColor: "#FFFFFF" }}>
          <Grid item className={classes.header}>
            <Typography variant="h6">{bucket.length === 0 ? "" : bucket[index].title}</Typography>
          </Grid>
          <Grid item xs={12}>
            {bucket.length === 0 ? (
              <div className={classes.bodyList}>Please create a category first ...</div>
            ) : (
              <ListGroup className={classes.bodyList}>
                <ListGroupItemHeading className={classes.listHeader}>Task</ListGroupItemHeading>
                {bucket[index].tasks.length === 0 ? (
                  <div className={classes.bodyList}>Please create a task first ...</div>
                ) : (
                  bucket[index].tasks.map((value, i) => (
                    <ListGroupItem key={i + "task"} className={classes.listItem}>
                      {value.content}
                    </ListGroupItem>
                  ))
                )}
              </ListGroup>
            )}
            <BottomBar classes={classes} isOpenMenu={isOpenMenu} handleOnClickFab={handleOnClickFab} handleOpenCreateBucket={handleOpenCreateBucket} handleOpenCreateTask={handleOpenCreateTask} bucket={bucket} />
          </Grid>
          <PopUp open={isOpenCreateBucket} toggle={handleOpenCreateBucket} header="Create Category" onChange={handleTextOnChange} onClick={handleCreateBucket} placeholder="Enter the category..." />
          <PopUp open={isOpenCreateTask} toggle={handleOpenCreateTask} header="Create Task" onChange={handleTextOnChange} onClick={handleCreateTask} placeholder="Enter the task..." />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
