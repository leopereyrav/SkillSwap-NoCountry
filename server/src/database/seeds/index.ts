import 'dotenv/config';
import mongoose from 'mongoose';
import Category from '../../models/categories.models';
import User from '../../models/users.models';
import Member from '../../models/members.models';
import { config } from '../../config/config';
import { getCategories } from './categorySeeds';
import { getUsers } from './usersSeeds';
import { getMembers } from './membersSeeds';

async function seed() {
  try {
    const db = await mongoose.connect(config.DB.DB_URI_DEV!);
    const categories = await Category.find();
    const users = await User.find();
    const members = await Member.find();
    const skillLevels = ['basico', 'intermedio', 'avanzado']

    let allCategories;
    let allUsers;

    if (!categories.length) {
      allCategories = await Promise.all(
        getCategories().map((categoryData) => {
          return Category.create(categoryData);
        })
      );
      console.log('**** Successfully created categories ****');
    }

    if(!users.length && !members.length) {
      allUsers = await Promise.all(
        (await getUsers()).map((userData) => {
          return User.create(userData);
        })
      );

      allCategories = categories.length == 0 ? allCategories : categories;

      await Promise.all(
        (await getMembers()).map((member) => {
          let randomPreference = randomElementFromArray(allCategories);
          let randomSkill = randomElementFromArray(allCategories);
          let randomLevel = randomElementFromArray(skillLevels);
          let user = allUsers.find(user => user.username == member.name);

          const memberData = {
            ...member,
            preferences: [
              {
                name: randomPreference.name,
                categoryId: randomPreference.id,
              }
            ],
            skills: [
              {
                name: randomSkill.name,
                categoryId: randomSkill.id,
                description: randomSkill.description,
                level: randomLevel,
              }
            ],
            user: user.id,
          }

          return Member.create(memberData);
        })
      );
      console.log('**** Users and members successfully created ****');
    }

    db.disconnect();
  } catch (error) {
    console.log('Error in Seeds: ', error);
  }
}

seed();

const randomElementFromArray = (arrayData: any) : any => {
  if(!arrayData.length) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * arrayData.length);
  return arrayData[randomIndex];
}