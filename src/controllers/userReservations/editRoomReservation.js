const sequelize = require("../../db");

const editRoomReservation = async (req, res) => {
  const { reservation_id, ...fieldsToUpdate } = req.body;

  try {
    const result = await sequelize.transaction(async (t) => {
      const [updated] = await sequelize.models.UserReservations.update(
        fieldsToUpdate,
        {
          where: { id: reservation_id },
          returning: true,
          transaction: t,
        }
      );

      if (updated[0] === 0) {
        throw new Error("No se encontró la reservación para actualizar");
      }

      return updated[1][0];
    });

    res.status(200).json(result);
  } catch (error) {
    console.error("Error updating room reservation:", error);
    res.status(500).json({ message: "Error updating room reservation" });
  }
};

module.exports = { editRoomReservation };
