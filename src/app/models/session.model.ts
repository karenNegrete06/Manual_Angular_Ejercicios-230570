export interface Session {
    sessionID: string; // ID único de la sesión
    email: string; // Correo electrónico del usuario
    nickname: string; // Apodo del usuario
    createdAt: string; // Fecha en la que se creó la sesión
    lastAccessed: string; // Fecha del último acceso
    status: "Activa" | "Finalizada por el Usuario" | "Inactiva" | "Finalizada por el Servidor"; // Estado de la sesión
    serverIp: string; // Dirección IP del servidor
    serverMac: string; // Dirección MAC del servidor
    macAddress: string; // Dirección MAC del cliente
    inactivityTime: {
      hours: number;
      minutes: number;
      seconds: number;
    }; // Tiempo de inactividad
    durationTime: {
      hours: number;
      minutes: number;
      seconds: number;
    }; // Duración total de la sesión
  }