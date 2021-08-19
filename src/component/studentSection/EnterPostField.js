import React,{useRef,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

function EnterPostField() {
  const classes = useStyles();

  const desc = useRef();
  const [file, setFile] = useState(null);
  const [text, setText] = useState(null);
  
  const convertBase64Url = (file)=>{
    return new Promise((resolve,reject)=>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = ()=>{
        resolve(fileReader.result);
      }
      fileReader.onerror = (error)=>{
         reject(error);
      }
    })
  }

  const uploadImage = async(e) =>{
    const image = e.target.files[0];
    const base64URL = await convertBase64Url(image);
    setFile(base64URL);
  }
  const submitHandler =  async (e) => {
    e.preventDefault();
   
      const data = new FormData();
     
      data.append("file", file);
      data.append("text", text);
      try {
        axios.post("http://localhost:5000/upload",{
          caption: text,
          image: file
        });
      } catch (err) {
        console.log(err);
      }
      setText("");
      setFile("");
  };
  console.log(text);
  return (
    <div className="post_input_field">
     <div className="input_area">
       <input 
        onChange={(e)=> setText(e.target.value)}
        placeholder="What's in your mind "
        type="text"
        ref={desc}
        value={text} />
     </div>
     <form onSubmit={submitHandler}>
     <div className="icon_area">
      <input accept="image/*" 
       className={classes.input} 
       id="icon-button-file" 
       type="file"
       onChange={uploadImage} />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      <input accept="image/*"
       className={classes.input} 
       id="hicon-button-file" 
       type="file"
       onChange={(e)=> setFile(e.target.files[0])} />
      <label htmlFor="hicon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <VideoLibraryIcon />
        </IconButton>
      </label>
      <input accept="image/*" 
       className={classes.input} 
       id="ficon-button-file" 
       type="file"
       onChange={(e)=> setFile(e.target.files[0])}  />
      <label htmlFor="ficon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <InsertLinkIcon />
        </IconButton>
      </label>
      <button className="shareButton" type="submit">
            Share
      </button>
     </div>
     </form>
    </div>
  )
}

export default EnterPostField
