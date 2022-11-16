import { Card, Paragraph, Title } from "react-native-paper";
import { StyleSheet } from "react-native";
import TopBar from "../components/TopBar";

const NoticeDetailScreen = () => {
  return (
    <>
      <TopBar title={"땡's 스터디"} backButton={true} />
      <Card style={styles.main}>
        <Card.Content>
          <Title>공지사항</Title>
          <Paragraph>.......</Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.comments}>
        <Card.Content>
          <Title>댓글</Title>
          <Paragraph>.......</Paragraph>
        </Card.Content>
      </Card>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 3,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  comments: {
    flex: 1,
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default NoticeDetailScreen;
