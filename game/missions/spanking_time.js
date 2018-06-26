// Spanking time =========================================================================================
function game_init_spanking_time(){
    console.log("[Spanking time] starting...");
    other_objective_1_fulfilled = true;
    show_mission_screen("Spanking time", "Play the match normally. Be prepared to spank yourself with either a paddle or your hand though!");
}
function on_death_spanking_time(){

    var spankable = parseInt(current_game_counter_x) + 20;
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Spank your ass " + spankable + " times.</span>");

    // Condition 1: X must be >= 30 on every death
    if(current_game_counter_x < 30){
        other_objective_1_fulfilled = false;
    }

    // Condition 2: X must be >= 70 at least once
    if(current_game_counter_x >= 70){
        other_objective_2_fulfilled = true;
    }

    current_game_counter_x = 0;
}
function on_rez_spanking_time(){
    showConditionalInstruction("Good rez!");
    current_game_counter_x += 10;

    // Condition 2: X must be >= 70 at least once
    if(current_game_counter_x >= 70){
        other_objective_2_fulfilled = true;
    }
}
function on_kill_spanking_time(){
    showConditionalInstruction("Nice kill!");
    current_game_counter_x += 5;

    // Condition 2: X must be >= 70 at least once
    if(current_game_counter_x >= 70){
        other_objective_2_fulfilled = true;
    }
}
function on_ult_spanking_time(){
    showConditionalInstruction("Good slut!");
    current_game_counter_x += 20;

    // Condition 2: X must be >= 70 at least once
    if(current_game_counter_x >= 70){
        other_objective_2_fulfilled = true;
    }
}
function on_mission_end_spanking_time(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", spanking_time_mission_end_handler);
}
function spanking_time_mission_end_handler(match_result){
    // Check conditions:
    if(other_objective_1_fulfilled === true || other_objective_2_fulfilled === true){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, match_result);
}
// =======================================================================================================
