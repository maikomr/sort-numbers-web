import axios from 'axios';

class NumbersApi {
  sort = async (numberListStr) => {
    const res = await axios.post('http://localhost:8080/api/numbers/sort', {numberListStr });
    return res.data;
  }
}

export default new NumbersApi();
