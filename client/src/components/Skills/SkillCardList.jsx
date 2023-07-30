'use client';
import React from 'react';
import SkillCard from './SkillCard';

export default function SkillCardList({ skills }) {
  return (
    <div className='container flex flex-row mx-auto flex-wrap items-center justify-center'>
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          title={skill.title}
          description={skill.description}
          category={skill.category}
          level={skill.level}
        />
      ))}
    </div>
  );
}


