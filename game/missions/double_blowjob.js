// Double blowjob ========================================================================================

var double_blowjob_match_result = false;

function game_init_double_blowjob(){
    console.log("[Double blowjob] starting...");
    show_mission_screen("Double blowjob", "Get two dildos ready. You will always be sucking on at least one of them. You may not swallow any saliva.");
}
function on_death_double_blowjob(){
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Deepthroat 10 times.</span>");
    current_game_deaths += 1;
}
function on_rez_double_blowjob(){
    current_game_rezzes += 1;
    showConditionalInstruction("Good slut. Now switch dildos.");
}
function on_kill_double_blowjob(){
    showConditionalInstruction("Noted.");
    current_game_kills += 1;
}
function on_ult_double_blowjob(){
    showConditionalInstruction("Drool all over yourself!");
    current_game_ults += 1;
}
function on_mission_end_double_blowjob(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", double_blowjob_mission_end_q1);
}
function double_blowjob_mission_end_q1(match_result){
    double_blowjob_match_result = match_result;
    askQuestion("Did you get at least one gold medal?", double_blowjob_mission_end_handler);
}
function double_blowjob_mission_end_handler(gold_medal_result){
    // Check conditions:
    if(current_game_rezzes >= 5 || gold_medal_result === true){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, double_blowjob_match_result);
}
// =======================================================================================================
