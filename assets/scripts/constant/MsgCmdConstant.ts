

const { ccclass, property } = cc._decorator;

@ccclass
export default class MsgCmdConstant {


    public static MSG_RET_CODE_SUCCESS: number = 0;
    public static MSG_CMD_LOGIN_TO_GATE_S: number = 1;

    /**
     * 1000 以内预留给服务器定义
     */


    //发送给web login 服务器
    public static MSG_CMD_LOGIN_S: number = 1001;
    public static MSG_CMD_LOGIN_R: number = 1002;


    //通过中转服务器发送到db服务器
    public static MSG_CMD_DB_BEGIN: number = 3000;
    public static MSG_CMD_DB_PLAYER_INFO_S: number = 3001;
    public static MSG_CMD_DB_PLAYER_INFO_R: number = 3002;
    public static MSG_CMD_DB_END: number = 3999;

    //通过gate发送到游戏服务器
    public static MSG_CMD_GAME_BEGIN: number = 4000;

    public static MSG_CMD_GAME_CREATE_ROOM_S: number = 4001;
    public static MSG_CMD_GAME_CREATE_ROOM_R: number = 4002;
    public static MSG_CMD_GAME_JOIN_ROOM_S: number = 4003;
    public static MSG_CMD_GAME_JOIN_ROOM_R: number = 4004;
    public static MSG_CMD_GAME_PLAYER_LEFT_ROOM_R: number = 4005;

    public static MSG_CMD_GAME_ROOM_PLAYER_LIST_S:number = 4006;
    public static MSG_CMD_GAME_ROOM_PLAYER_LIST_R:number = 4007;


    public static MSG_CMD_GAME_READY_S:number = 4008;
    public static MSG_CMD_GAME_READY_R:number = 4009;

    public static MSG_CMD_GAME_START_R:number = 4010;

    public static MSG_CMD_PLAYER_BOMB_PLACE_S:number = 4011;
    public static MSG_CMD_PLAYER_BOMB_PLACE_R:number = 4012;


    public static MSG_CMD_PLAYER_POSITION_S = 4013;
    public static MSG_CMD_PLAYER_POSITION_R = 4014;

    public static MSG_CMD_GAME_END: number = 4999;

}
