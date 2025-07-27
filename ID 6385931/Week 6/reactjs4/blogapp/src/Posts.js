import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const postObjects = data.map(p => new Post(p.id, p.title, p.body));
                this.setState({ posts: postObjects });
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                alert('Failed to load posts');
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert(`Error: ${error.message}`);
        console.error('Component error:', info);
    }

    render() {
        return (
            <div>
                <h2>Blog Posts</h2>
                {this.state.posts.map(post => (
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
