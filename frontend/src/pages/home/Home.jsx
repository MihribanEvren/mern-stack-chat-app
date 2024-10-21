import MessageContainer from '../../components/messages/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar';

function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-violet-400 shadow-md relative">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}

export default Home;
