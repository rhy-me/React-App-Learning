let count = 0;
function Message() {
  count++;
  return <h1>Count {count}</h1>;
}

export default Message;
