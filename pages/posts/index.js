import Link from 'next/link'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './index.module.css'
import { useSelector, useDispatch } from "react-redux";
import { getPosts, addPost, deletePosts, updatePosts } from '../../components/store/action/postAction';
import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import Layout from '../../components/layout';
function Home({ posts }) {
  const state = useSelector((state) => {
    return state;
  });
  const [open, setOpen] = useState(false)
  const [id, setId] = useState(null);
  const [userId, setUserID] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  console.log('props', posts)
  console.log('getPOst', state);

  const dispatch = useDispatch();




  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  function hanldePostapi() {
    dispatch(addPost({
      userId,
      title, body
    }));
    setUserID('');
    setTitle('');
    setBody('');
  }
  function hanldeDeletePost(id) {
    dispatch(deletePosts(id))
  }
  function handleUpdatePost(data) {
    //debugger
    dispatch(updatePosts(data))
    setOpen(false);
    setUserID('');
    setTitle('');
    setBody('');
  }

  const handleClickOpen = (item) => {
    setUserID(item.userId);
    setId(item.id);
    setTitle(item.title);
    setBody(item.body)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  if (state !== null && state !== undefined) {
    return (
      <>
        <Layout>
          <div className={styles.container} >
            <div className={styles.div_add}>
              <input className={styles.input}
                value={userId}
                onChange={(e) => setUserID(e.target.value)}
                placeholder='userId'
              />
              {/* <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder='id'
            /> */}
              <input className={styles.input}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='title'
              />
              <input className={styles.input}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder='body'
              />
              <button className={styles.btn_add} onClick={() => hanldePostapi()}>Add</button>
            </div>

            <table>
              <thead >
                <tr >
                  <th > ID</th>
                  <th className={styles.th_user_Id}>User ID</th>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
              </thead>

              <tbody className="">
                {posts === undefined ? null : posts.map((item) => (
                  <tr key={item.id}>
                    <td className={styles.td_Id} >{item.id}</td>
                    <td className={styles.td_user_Id}>{item.userId}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>
                      <Link href={`posts/${item.id}`}>
                        <a>
                          <button className={styles.btn_details}>
                            Details
                          </button>
                        </a>
                      </Link>
                    </td>
                    <td> <button className={styles.btn_delete} onClick={() => hanldeDeletePost(item.id)}>Delete</button></td>
                    <td> <button className={styles.btn_update} onClick={() => handleClickOpen(item)}>
                      update
                    </button></td>

                  </tr>
                ))}
              </tbody>
            </table>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Update Item ID : {id}</DialogTitle>
              <DialogContent>

                <TextField
                  onChange={(e) => setUserID(e.target.value)}
                  value={userId}
                  margin="dense"
                  id="UserID"
                  label="UserID"
                  fullWidth
                />
                <TextField
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  margin="dense"
                  id="Title"
                  label="Title"
                  fullWidth
                />
                <TextField

                  onChange={(e) => setBody(e.target.value)}
                  value={body}
                  margin="dense"
                  id="Body"
                  label="Body"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button color="primary"

                  onClick={() => handleUpdatePost({ id, userId, title, body })} >
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </div>

        </Layout>
      </>
    )

  }
  else {
    return 'abc';
  }
}

export default connect(mapStateToProps)(Home);
function mapStateToProps(state) {
  return {
    posts: state.poster.posts
  };
}
