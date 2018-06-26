// Twin blowjob ==========================================================================================

var twin_blowjob_match_result = false;
var twin_blowjob_medal_result = false;

function game_init_twin_blowjob(){
    console.log("[Twin blowjob] starting...");
    show_mission_screen("Twin blowjob", "Grab two dildos. Set them on a table. Start sucking, alternate between each of them every 5 sucks.");
}
function on_death_twin_blowjob(){
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Deepthroat each dildo once.</span>");
    current_game_deaths += 1;
}
function on_rez_twin_blowjob(){
    current_game_rezzes += 1;
    showConditionalInstruction("Try to stuff both the dildos in your mouth at the same time.");
}
function on_kill_twin_blowjob(){
    showConditionalInstruction("Noted.");
    current_game_kills += 1;
}
function on_ult_twin_blowjob(){
    showConditionalInstruction("Good slut.");
    current_game_ults += 1;
}
function on_mission_end_twin_blowjob(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", twin_blowjob_mission_end_q1);
}
function twin_blowjob_mission_end_q1(match_result){
    twin_blowjob_match_result = match_result;
    askQuestion("Did you get a gold medal in objective time?", twin_blowjob_mission_end_q2);
}
function twin_blowjob_mission_end_q2(medal_result){
    twin_blowjob_medal_result = medal_result;
    askQuestion("Did you get a gold medal in healing?", twin_blowjob_mission_end_handler);
}
function twin_blowjob_mission_end_handler(healing_medal_result){
    // Check conditions:
    if(twin_blowjob_medal_result === true || healing_medal_result === true){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, twin_blowjob_match_result);
}
// =======================================================================================================
