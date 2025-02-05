import { FC } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
}

interface VideoTutorialsProps {
  videos: Video[];
}

const VideoTutorials: FC<VideoTutorialsProps> = ({ videos }) => {
  return (
    <div className="w-full py-20 px-4 md:px-8 bg-black/90">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Video Tutorials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 border-2 border-red-500 rounded-lg overflow-hidden"
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video bg-gray-900"
              >
                {video.thumbnail ? (
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Play className="w-12 h-12 text-red-500" />
                  </div>
                )}
              </a>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTutorials;
