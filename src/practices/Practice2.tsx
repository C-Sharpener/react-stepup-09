export const Practice2 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  // const getTotalFee = (num: number) => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    // return total.toString();
    return total;
  };

  // const onClickPractice = () => alert();
  // const onClickPractice = () => calcTotalFee(1000); // 1100
  // const onClickPractice = () => calcTotalFee("1000"); // 1100
  // const onClickPractice = () => calcTotalFee("1,000"); // NaN
  const onClickPractice = () => {
    console.log(getTotalFee(1000)); // 1100
  };
  return (
    <div>
      <p>練習問題:引数の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
