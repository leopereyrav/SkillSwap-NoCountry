import User from '../models/users.models';

class SearchService {
  public async search(filters:{category:string;level?:string;page?:number;limit?:number}) {
    const defaultOption = { $match: { 'profile.skills.name': { $regex: filters.category, $options: 'i' } } };
    const withLevelOption = {
      $match: {
        'profile.skills.name': { $regex: filters.category, $options: 'i' },
        'profile.skills.level': { $eq: filters.level },
      },
    };

    const query = filters.level ? withLevelOption : defaultOption;
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
          $project: {
            password: 0,
            __v: 0,
            token: 0,
          },
        },
        // {
        //   $unwind: '$profile.skills',
        // },
        query,
        {
          $group: {
            _id: '$_id',
            username: { $first: '$username' },
            email: { $first: '$email' },
            role: { $first: '$role' },
            profile: { $push: '$profile' },
          },
        },
      ]);

      filters.limit = Math.abs(filters.limit || 5);
      let currentPage = Math.abs(filters.page || 1);
      let totalUsers = users.length;
      console.log(totalUsers)
      let totalPages = Math.ceil(totalUsers / filters.limit);
      users = users.splice((currentPage - 1) * filters.limit, filters.limit);
  
      return {
        msg:
          currentPage > totalPages
            ? `OK 200: The filters.limit is page ${totalPages}`
            : `OK 200: users found, ${totalUsers}`,
        totalUsers,
        totalPages,
        perPage: filters.limit > totalUsers ? totalUsers : filters.limit,
        currentPage,
        users,
      };

    } catch (err: any) {
      console.log('Error in the Seach Service', err);
    }
  }
}

export const searchService = new SearchService();
