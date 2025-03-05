import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const PostsList = () => {

    const [posts, setPosts] = useState(null);

    const url = import.meta.env.VITE_ENDPOINT_URL;

    useEffect(() => {
        axios.get(url)
            .then((res) => setPosts(res.data))
            .catch((err) => console.error(err))
    });

    return (
        <>
            <h1>Lista Posts</h1>

            <div className="container">
                <div className="row">
                    {posts === null ? (
                        <div>loading</div>
                    ) : (
                        posts.map((elem) => {
                            const { id, title, content, image, tags } = elem;

                            return (
                                <div className="col-3" key={id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">{title}</h4>
                                            <p className="card-text">{tags}</p>
                                            
                                            <Link to={ '/posts-list/' + id }>
                                                <button> Vai al post</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>




        </>
    )
}

export default PostsList