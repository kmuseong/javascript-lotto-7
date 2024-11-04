import { Console } from '@woowacourse/mission-utils';


class App {
  async run() {
    Console.print('구입금액을 입력해 주세요.');
    const input = await this.answer();
  }

  async answer() {
    const input = await Console.readLineAsync('');
    return input;
  }
}

export default App;
