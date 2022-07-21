export class PhoneList {
  arr = [];
  getPhone() {
    return axios({
      url: "https://62bc4dcbeff39ad5ee223a23.mockapi.io/api/Captone2",
      method: "GET",
    });
  }
  addPhone(phone) {
    return axios({
      url: "https://62bc4dcbeff39ad5ee223a23.mockapi.io/api/Captone2",
      method: "POST",
      data: phone,
    });
  }
  removePhone(id) {
    return axios({
      url: `https://62bc4dcbeff39ad5ee223a23.mockapi.io/api/Captone2/${id}`,
      method: "DELETE",
    });
  }
  getPhoneById(id) {
    return axios({
      url: `https://62bc4dcbeff39ad5ee223a23.mockapi.io/api/Captone2/${id}`,
      method: "GET",
    });
  }
  updatePhone(phone) {
    return axios({
      url: `https://62bc4dcbeff39ad5ee223a23.mockapi.io/api/Captone2/${phone.id}`,
      method: "PUT",
      data: phone,
    });
  }
}
