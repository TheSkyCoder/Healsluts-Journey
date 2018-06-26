// Body writing ==========================================================================================

var body_writing_match_result = false;
var body_writing_gold_medal_result = false;

function game_init_body_writing(){
    console.log("[Body writing] starting...");
    show_mission_screen("Body writing", "Play the game normally, but remember to get a marker pen ready!<br /><br />If someone calls you a name over voice, write that name on your body. If a teammate says that they need healing, slap your face.");
}
function on_death_body_writing(){
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Write something dirty on your body, then add a tally mark on your ass.</span>");
    current_game_deaths += 1;
}
function on_rez_body_writing(){
    current_game_rezzes += 1;
    showConditionalInstruction("Good job, slut.");
}
function on_kill_body_writing(){
    showConditionalInstruction("Noted.");
    current_game_kills += 1;
}
function on_ult_body_writing(){
    showConditionalInstruction("Noted.");
    current_game_ults += 1;
}
function on_mission_end_body_writing(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", body_writing_mission_end_q1);
}
function body_writing_mission_end_q1(match_result){
    body_writing_match_result = match_result;
    askQuestion("Did you get at least 2 gold medals?", body_writing_mission_end_q2);
}
function body_writing_mission_end_q2(gold_medal_result){
    body_writing_gold_medal_result = gold_medal_result;
    askQuestion("Did you get play of the game?", body_writing_mission_end_handler);
}
function body_writing_mission_end_handler(potg_result){
    // Check conditions:
    if(body_writing_gold_medal_result === true || potg_result === true){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, body_writing_match_result);
}
// =======================================================================================================
