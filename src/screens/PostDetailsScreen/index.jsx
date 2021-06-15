import React, { useEffect, useState } from 'react'
import '../../css/style.scss'
import '../../css/interior.scss'
import '../../css/viewpost.scss'
import '../../css/style.css'
import '../../css/interior.css'
import '../../css/viewpost.css'
import axios from 'axios';
import { NavViewMobile } from '../../components/NavViewMobile';
import { NavView } from '../../components/NavView';
import { ContentPost } from '../../components/ContentPost';
import { ReadNext } from '../../components/ReadNext';
import { Listings } from '../../components/Listings';
import { CardOwner } from '../../components/CardOwner';
import { RepliesSection } from '../../components/RepliesSection';


import { useParams } from 'react-router-dom'

export const PostDetailsScreen = () => {
  const [viewport, setViewport] = useState(window.innerWidth);
  const [post, setPost] = useState()
  const [posts, setPosts] = useState()
  const [replies, setReplies] = useState()
  const [newReplySubmit, setNewReplySubmit] = useState(false);
  const [newReply, setNewReply] = useState()

  const params = useParams();

  useEffect(() => {
    const updateSize = () => {
      setViewport(window.innerWidth)
    }
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])


  useEffect(() => {
    const getPostDetails = async () => {
      try {
        const { data } = await axios.get(`https://devto-challenge-react.herokuapp.com/posts/${params.id}`);
        setPost(data.data.post)
      } catch (error) {
        console.error(error)
      }
    }
    getPostDetails();
  }, [])

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get('https://devto-challenge-react.herokuapp.com/posts')
        setPosts(data.data.posts)
      } catch (error) {
        console.error(error)
      }
    }
    getPosts()
  }, [])

  useEffect(() => {
    const getReplies = async () => {
      try {
        const { data } = await axios.get('https://devto-challenge-react.herokuapp.com/replies')
        setReplies(data.data.replies)
      } catch (error) {
        console.error(error)
      }
    }
    console.log(replies);
    getReplies()
  }, [newReplySubmit])

  const handleChangeReply = (ev) => {
    setNewReply(ev.target.value)
    console.log(newReply);
  }
  const handleSubmitReply = async (ev) => {
    ev.preventDefault()
  }

  if (!post || !posts || !replies) {
    return (<div className="container container-fluid"><p>Loading</p></div>)
  }

  return (
    <div className="w-100 bg-fondo">
      <div className="container container-fluid">
        <div className="row">
          {
            viewport < 768 ? <NavViewMobile /> : <NavView />
          }
          <section className="col-md-11 col-lg-8" id="post-list">
            <div className="row" id="post-article-wrapper">
              <ContentPost post={post} />
              <RepliesSection
                post={post}
                replies={replies}
                handleChangeReply={handleChangeReply}
              />
              <ReadNext />
            </div>
          </section>

          <section className="col-lg-3 d-none d-lg-block p-3 overflow-auto sticky-top right-side-sticky" id="owner-card-info">
            <CardOwner post={post} />
            <Listings posts={posts} post={post} />
          </section>
        </div>
      </div>
    </div>
  )
}
