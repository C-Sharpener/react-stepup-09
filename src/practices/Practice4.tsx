export const Practice4 = () => {
  // const calcTotalFee = (num: number) => {
  // const calcTotalFee = (num: any) => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  // const onClickPractice = () => alert();
  // const onClickPractice = () => calcTotalFee(1000); // 1100
  // const onClickPractice = () => calcTotalFee("1000"); // 1100
  const onClickPractice = () => calcTotalFee("1,000"); // NaN

  return (
    <div>
      <p>練習問題:設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
