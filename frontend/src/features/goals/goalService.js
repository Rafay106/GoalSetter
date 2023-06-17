import axios from "axios";

const API_URL = "api/goals/";
const BASE_URL = "http://localhost:10000/";
// Set Goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, goalData, config);

  return response.data;
};

// Get Users Goal
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(BASE_URL + API_URL, config);

  return response.data;
};

// Delete User Goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + `/${goalId}`, config);

  return response.data;
};

// Update User Goal
const updateGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    BASE_URL + API_URL + `/${goalData.goalId}`,
    { text: goalData.text },
    config
  );

  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
  updateGoal,
};

export default goalService;
