import { useState } from 'react';
import { IoMdVideocam } from 'react-icons/io';
import { AiFillAudio } from 'react-icons/ai';
import { ImPhoneHangUp } from 'react-icons/im';
import { MdPeople } from 'react-icons/md';
import { useRouter } from 'next/navigation';

export default function Controllers({ stream }) {
  const [video, setVideo] = useState(true);
  const [audio, setAudio] = useState(true);

  const { push } = useRouter();

  const handleVideo = () => {
    setVideo(!video);
    stream.getVideoTracks()[0].enabled = !video;
  };

  const handleAudio = () => {
    setAudio(!audio);
    stream.getAudioTracks()[0].enabled = !audio;
  };

  const handleLeave = () => {
    push('/home');
  };

  return (
    <div className='w-full fixed bottom-0 flex justify-around bg-purpleSecondary text-purpleSecondary p-3'>
      <button
        className={`rounded-full hover:bg-[#fffa] p-2 ${
          video ? 'bg-white' : 'bg-[#fffa]'
        }`}
        onClick={handleVideo}
      >
        {<IoMdVideocam size={23} />}
      </button>
      <button
        className={`rounded-full hover:bg-[#fffa] p-2 ${
          audio ? 'bg-white' : 'bg-[#fffa]'
        }`}
        onClick={handleAudio}
      >
        {<AiFillAudio size={23} />}
      </button>

      <button
        className='text-white p-2 rounded-full hover:bg-[#fffa]'
        onClick={handleAudio}
      >
        {<MdPeople size={23} />}
      </button>

      <button
        className='bg-red-700 hover:bg-red-500 text-white rounded-full p-2'
        onClick={handleLeave}
      >
        {<ImPhoneHangUp size={23} />}
      </button>
    </div>
  );
}
