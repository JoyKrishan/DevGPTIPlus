// 例: 数値を増加させる状態とアクションの定義
type CounterState = {
  count: number;
};

const increaseAction = (state: CounterState, payload: number): CounterState => {
  return { count: state.count + payload };
};

// カスタムフックの使用
const [counterState, dispatch] = useFormState(increaseAction, { count: 0 });

// 状態の表示
console.log(counterState.count); // 0

// アクションのディスパッチ
dispatch(1);

// 更新された状態の表示
console.log(counterState.count); // 1