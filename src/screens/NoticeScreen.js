import NoticeCard from "../components/NoticeCard";
import { ScrollView } from "react-native";

const NoticeScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
      </ScrollView>
    </>
  );
};

export default NoticeScreen;
