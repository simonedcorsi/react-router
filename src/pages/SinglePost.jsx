import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"

import { useGlobalContext } from "../context/GlobalContext";

const SinglePost = () => {
    const { index } = useParams();

    // const initialObjectPost = {
    //     id: '',
    //     title: '',
    //     content: '',
    //     image: '',
    //     tags: [],
    // };

    // const [post, setPost] = useState(initialObjectPost);

    // const url = import.meta.env.VITE_ENDPOINT_URL;

    const { post, fetchSingolPost} = useGlobalContext()

    useEffect(() => {
        // axios.get(url + '/' + id)
        //     .then((res) => setPost(res.data))
        //     .catch((err) => console.error(err))
        fetchSingolPost(index)

    }, [index]);

    const { id, title, content, image, tags } = post;

    return (
        <>
            <h1>Post Singolo: {title} - { id }</h1>
        </>
    );
};

export default SinglePost;