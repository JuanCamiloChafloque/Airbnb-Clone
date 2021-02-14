import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

class Post extends Component {
    constructor(props) {
        super(props);
        this.post = props.post;
        this.state = {
        };
    }

    render() {

        return (
            <View style={styles.container}>

                <Image style={styles.image} source={{ uri: this.post.image }} />
                <Text style={styles.bedrooms}>{this.post.bed} bed {this.post.bedroom} bedrooms</Text>
                <Text style={styles.description} numberOfLines={2} >{this.post.type}. {this.post.title}</Text>
                <Text style={styles.prices}>
                    <Text style={styles.oldPrice}>${this.post.oldPrice}</Text>
                    <Text style={styles.newPrice}>  ${this.post.newPrice}</Text>
                    / night
                </Text>
                <Text style={styles.totalPrice}>${this.post.totalPrice} total</Text>
            </View>
        );
    }
}

export default Post;
