export const openDialog = (open, name, orderId, avatar, total, date) => ({
  type: "OPEN_DIALOG",
  payload: {
    open: open,
    name: name,
    orderId: orderId,
    avatar: avatar,
    total: total,
    date: date,
  },
});

export const closeDialog = () => ({
  type: "CLOSE_DIALOG",
});
