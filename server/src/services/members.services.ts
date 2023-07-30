import { IMember } from '../interfaces/members.interface';
import Member from '../models/members.models';

const fetchCreateMembers = async (newMember: IMember) => {
  try {
    const member = await Member.create(newMember);
    if (member === null) throw new Error('Error while creating member');
    return {
      msg: 'User created Succesfully!',
      member,
    };
  } catch (error) {
    throw new Error(error as string);
  }
};

const fetchGetMembers = async () => {
  try {
    let members: IMember[] = await Member.find();
    if (!members) throw new Error('Members Not founds');

    return {
      msg: `we found ${members.length} members`,
      members,
    };
  } catch (error) {
    throw new Error(error as string);
  }
};

const fetchGetOneMember = async (id: string) => {
  try {
    const member = await Member.findById(id).exec();
    console.log(member);

    if (!member) throw new Error('Member not found!');
    return {
      msg: `we found a member with id:${id}`,
      member,
    };
  } catch (error) {
    throw new Error(error as string);
  }
};

export const updateService = async (data: any, id: string) => {
  const res = Member.findOneAndUpdate({ user: id }, { ...data });

  if (!res) throw new Error('Member not found');

  return res;
};

export { fetchCreateMembers, fetchGetMembers, fetchGetOneMember };
