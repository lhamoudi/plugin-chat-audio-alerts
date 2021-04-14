
import { FlexPlugin } from "flex-plugin";

const PLUGIN_NAME = "ChatAudioAlertsPlugin";

export default class ChatAudioAlertsPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {

    const { REACT_APP_SERVICE_BASE_URL } = process.env;

    const newTaskAlertFile = `${REACT_APP_SERVICE_BASE_URL}/alert-incoming-task-reservation.wav`;
    const newChatMessageAlertFile = `${REACT_APP_SERVICE_BASE_URL}/alert-incoming-chat-message.wav`;
    /*
     * Play an audio file for each new task reservation that arrives
     */
    manager.workerClient.on("reservationCreated", (taskReservation) => {
      // NOTE: We could filter for specific task channels here, but we're assuming any task will play the alert
      try {
        flex.AudioPlayerManager.play({
          url: newTaskAlertFile,
          repeatable: false, // just play it once
        });
      } catch (e) {
        console.log(`An error occurred playing ${newTaskAlertFile}`, e);
      }
    });
    /*
     * Play another audio file for any new chat message that you didn't send yourself
     */
    manager.chatClient.on("messageAdded", (chatMessage) => {
      if (chatMessage.author !== manager.chatClient.user.state.identity) {
        try {
          flex.AudioPlayerManager.play({
            url: newChatMessageAlertFile,
            repeatable: false, // just play it once
          });
        } catch (e) {
          console.log(`An error occurred playing ${newChatMessageAlertFile}`, e);
        }
      }
    });
  }

}
