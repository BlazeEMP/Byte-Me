// many commented lines may be useful, current use only requires users seeded and some predefined posts that do not need to be attached to a user

import mongoose from 'mongoose';
import { User, Post } from '../models/index.js'; // Adjust the import path as necessary // { Comment } removed for now
import seedData from './seedData.json' with { type: "json" };
import db from '../dbconfig/connection.js';
// import { IUser } from '../models/User.js';
// import { IPost } from '../models/Post.js';
// import { IComment } from '../models/Comment.js';

const seedDatabase = async () => {
	await db();

	// Clear the database
	await User.deleteMany();
	await Post.deleteMany();

	// run users one at a time to hash passwords using pre hook
	for (const user of seedData.users) {
		const newUser = new User(user);
		await newUser.save();
	}
	// const comments: IComment[] = await Comment.insertMany(seedData.comments);
	// const posts: IPost[] = 
	await Post.insertMany(seedData.posts);

	// //   randomly assign comments to posts
	// for (const comment of comments) {
	// 	const randomPost = posts[Math.floor(Math.random() * posts.length)];
	// 	randomPost.comments.push(comment._id as mongoose.Schema.Types.ObjectId);
	// 	await randomPost.save();
	// }

	// const users = await User.find();
	// //   randomly assign posts to users
	// for (const user of users) {
	// 	const randomPosts = posts.filter(post => post.username === user.username);
	// 	user.posts.push(...randomPosts.map(post => post._id as mongoose.Schema.Types.ObjectId));
	// 	await user.save();
	// }

	console.log('Database seeded!');
	mongoose.connection.close();
};

seedDatabase().catch(err => {
	console.error(err);
	mongoose.connection.close();
});