((global) => {
  let alert10 = async ({ title = "Notification", ...opts } = {}) => {
    if (!("Notification" in window)) return;

    let show = () => new Notification(title, opts);

    let permissionStatus = await Notification.requestPermission();
    if (permissionStatus === "granted") show();
  };

  Object.assign(alert10, {
    requestPermission: () => Notification?.requestPermission?.(),
    getPermissionStatus: () => Notification?.permission ?? "not-supported",
    isSupported: "Notification" in window,
  });

  global.alert10 = alert10;
})(globalThis);
