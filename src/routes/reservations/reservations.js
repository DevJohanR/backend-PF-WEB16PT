const {
  checkinReservations,
} = require("../../controllers/reservations/checkInReservations");
const {
  createReservation,
} = require("../../controllers/reservations/createReservations");
const {
  getReservations,
} = require("../../controllers/reservations/getReservations");
const {
  checkOutReservations,
} = require("../../controllers/reservations/checkOutReservations");

const { Router } = require("express");
const { authenticateToken } = require("../../helpers/authenticateToken");
const { get } = require("http");
const {
  getUserReservations,
} = require("../../controllers/userReservations/getUserReservations");

const router = Router();

router.post("/", createReservation);
router.get("/", getReservations);
router.post("/checkin", checkinReservations);
router.post("/checkout", checkOutReservations);
router.get("/userReservations/:userId", getUserReservations);

module.exports = router;
