import { Card, Paragraph, Title } from "react-native-paper";
import { StyleSheet } from "react-native";

const noticeList = [
  { title: "타이틀", content: "......" },
  { title: "타이틀", content: "......" },
  { title: "타이틀", content: "......" },
  { title: "타이틀", content: "......" },
  { title: "타이틀", content: "......" },
  { title: "타이틀", content: "......" },
  { title: "타이틀", content: "......" },
  { title: "타이틀", content: "......" },
  { title: "타이틀", content: "......" },
  { title: "타이틀", content: "......" },
  { title: "타이틀", content: "......" },
  { title: "타이틀", content: "......" },
  { title: "타이틀", content: "......" },
  { title: "타이틀", content: "......" },
  { title: "타이틀", content: "......" },
];

const Notice = ({ title, content }) => {
  return (
    <>
      <Card style={styles.card}>
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>{content}</Paragraph>
        </Card.Content>
      </Card>
    </>
  );
};

const NoticeCard = () => {
  return (
    <>
      {noticeList.map((v, i) => {
        return <Notice key={i} title={`공지사항 ${i}`} content={v.content} />;
      })}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default NoticeCard;
