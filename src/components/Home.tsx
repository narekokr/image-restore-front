import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';
import { Upload } from 'lucide-react';
import { useSelector } from '../store';
import ImageEditor from './ImageEditor';
import useUploadModal from './UploadModal';
import { FADE_DOWN_ANIMATION_VARIANTS } from '../constants';

const Home: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const { UploadModal, setShowUploadModal } = useUploadModal(setUploadedImage);
  const a = useSelector((state) => state);
  console.log(a, 'aa');
  return (
    <div>
      <UploadModal />
      {!uploadedImage
        ? (
          <motion.div
            className="z-10 max-w-2xl px-5 xl:px-0"
            initial="hidden"
            whileInView="show"
            animate="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.h1
              className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <Balancer>Restore Your Old Photos With AI</Balancer>
            </motion.h1>
            <motion.p
              className="mt-6 text-center text-gray-500 md:text-xl"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <Balancer ratio={0.6}>
                Transform your images with just a few clicks. Whether you want to bring life to
                black and white photos or
                restore old and scratched images, we&apos;ve got you covered.
              </Balancer>
            </motion.p>
            <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="-mb-4">
              <button
                className="group mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
                onClick={() => setShowUploadModal(true)}
              >
                <Upload className="h-5 w-5 text-white group-hover:text-black" />
                <p className="text-2xl">Upload a photo</p>

              </button>
            </motion.div>
          </motion.div>
        ) : (
          <button
            className="group mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            onClick={() => setShowUploadModal(true)}
          >
            <p className="text-lg">Upload another photo</p>
          </button>
        )}
    </div>
  );
};

export default Home;
