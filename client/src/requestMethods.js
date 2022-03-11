import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmIwYjNlYjAxNjNiYmNhYzFmN2Y2OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Njk4ODEyMiwiZXhwIjoxNjQ2OTk4OTIyfQ.GhABwPI7ViuWMfxxh6Gee3uWHg5nDuQNKcEvkbokfbc";

export const publicRequest = axios.create({ baseURL: BASE_URL });
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
