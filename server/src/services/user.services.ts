import { Types } from 'mongoose';
import User from '../models/users.models';

const getAllusers = async (page: number, limit: number) => {
  try {
    let users = await User.aggregate([
      {
        $lookup: {
          from: 'members',
          localField: '_id',
          foreignField: 'user',
          as: 'profile',
        },
      },
      {
        $unwind: {
          path: '$profile',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'schedules',
          localField: '_id',
          foreignField: 'user',
          as: 'schedules',
        },
      },
      {
        $project: {
          password: 0,
          __v: 0,
          token: 0,
        },
      },
    ]);

    limit = Math.abs(limit);
    let currentPage = Math.abs(page);
    let totalUsers = users.length;
    let totalPages = Math.ceil(totalUsers / limit);
    users = users.splice((currentPage - 1) * limit, limit);

    return {
      msg:
        currentPage > totalPages
          ? `OK 200: The limit is page ${totalPages}`
          : `OK 200: users found, ${totalUsers}`,
      totalUsers,
      totalPages,
      perPage: limit > totalUsers ? totalUsers : limit,
      currentPage,
      users,
    };
  } catch (error) {
    throw new Error(error as string);
  }
};

const getUserById = async (id: string) => {
  try {
    const user = await User.aggregate([
      { $match: { _id: new Types.ObjectId(id) } },
      {
        $lookup: {
          from: 'members',
          localField: '_id',
          foreignField: 'user',
          as: 'profile',
        },
      },
      {
        $unwind: {
          path: '$profile',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'schedules',
          localField: '_id',
          foreignField: 'user',
          as: 'schedules',
        },
      },
      {
        $project: {
          password: 0,
          __v: 0,
          token: 0,
        },
      },
    ]);

    return {
      msg: `OK 200: user found`,
      user,
    };
  } catch (error) {
    throw new Error(error as string);
  }
};

const filterUsers = async (filters: {}, page: number, limit: number) => {
  try {
    let users = await User.aggregate([
      {
        $lookup: {
          from: 'members',
          localField: '_id',
          foreignField: 'user',
          as: 'profile',
        },
      },
      {
        $unwind: {
          path: '$profile',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'schedules',
          localField: '_id',
          foreignField: 'user',
          as: 'schedules',
        },
      },
      {
        $project: {
          password: 0,
          __v: 0,
          token: 0,
        },
      },
    ]);

    limit = Math.abs(limit);
    let currentPage = Math.abs(page);
    let totalUsers = users.length;
    let totalPages = Math.ceil(totalUsers / limit);
    users = users.splice((currentPage - 1) * limit, limit);

    return {
      msg:
        currentPage > totalPages
          ? `OK 200: The limit is page ${totalPages}`
          : `OK 200: users found, ${totalUsers}`,
      totalUsers,
      totalPages,
      perPage: limit > totalUsers ? totalUsers : limit,
      currentPage,
      users,
    };
  } catch (error) {
    throw new Error(error as string);
  }
};

export { getAllusers, getUserById, filterUsers };

// ref: https://www.mongodb.com/docs/manual/reference/operator/aggregation/unwind/
