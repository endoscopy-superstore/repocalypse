gdjs.EndCode = {};
gdjs.EndCode.localVariables = [];
gdjs.EndCode.GDBackgroundObjects1= [];
gdjs.EndCode.GDBackgroundObjects2= [];
gdjs.EndCode.GDBackgroundObjects3= [];
gdjs.EndCode.GDDialogue_9595BoxObjects1= [];
gdjs.EndCode.GDDialogue_9595BoxObjects2= [];
gdjs.EndCode.GDDialogue_9595BoxObjects3= [];
gdjs.EndCode.GDIris_9595TransitionObjects1= [];
gdjs.EndCode.GDIris_9595TransitionObjects2= [];
gdjs.EndCode.GDIris_9595TransitionObjects3= [];
gdjs.EndCode.GDDialogueObjects1= [];
gdjs.EndCode.GDDialogueObjects2= [];
gdjs.EndCode.GDDialogueObjects3= [];
gdjs.EndCode.GDIris_9595Transition_9595CloseObjects1= [];
gdjs.EndCode.GDIris_9595Transition_9595CloseObjects2= [];
gdjs.EndCode.GDIris_9595Transition_9595CloseObjects3= [];


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "dialogue bleeps.wav", 1, false, 50, 1);
}}

}


};gdjs.EndCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrollText") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}
{ //Subevents
gdjs.EndCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "L1", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


};gdjs.EndCode.mapOfGDgdjs_9546EndCode_9546GDIris_95959595Transition_95959595CloseObjects1Objects = Hashtable.newFrom({"Iris_Transition_Close": gdjs.EndCode.GDIris_9595Transition_9595CloseObjects1});
gdjs.EndCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "L2", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "home and ess.wav", 0, true, 20, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.advancedWindow.maximize(true, runtimeScene);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.EndCode.GDDialogueObjects1);
{for(var i = 0, len = gdjs.EndCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDDialogueObjects1[i].hide();
}
}{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "ESS Welcome");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Iris_Transition"), gdjs.EndCode.GDIris_9595TransitionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndCode.GDIris_9595TransitionObjects1.length;i<l;++i) {
    if ( gdjs.EndCode.GDIris_9595TransitionObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.EndCode.GDIris_9595TransitionObjects1[k] = gdjs.EndCode.GDIris_9595TransitionObjects1[i];
        ++k;
    }
}
gdjs.EndCode.GDIris_9595TransitionObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.EndCode.GDDialogueObjects1);
/* Reuse gdjs.EndCode.GDIris_9595TransitionObjects1 */
{for(var i = 0, len = gdjs.EndCode.GDIris_9595TransitionObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDIris_9595TransitionObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.EndCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDDialogueObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}{gdjs.dialogueTree.startFrom("End");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.EndCode.GDDialogueObjects1);
{for(var i = 0, len = gdjs.EndCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDDialogueObjects1[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.EndCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("Finished");
if (isConditionTrue_0) {
gdjs.EndCode.GDIris_9595Transition_9595CloseObjects1.length = 0;

{gdjs.dialogueTree.stopRunningDialogue();
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "start level.wav", 2, false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.EndCode.mapOfGDgdjs_9546EndCode_9546GDIris_95959595Transition_95959595CloseObjects1Objects, 0, 0, "Scene Transition");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Iris_Transition_Close"), gdjs.EndCode.GDIris_9595Transition_9595CloseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndCode.GDIris_9595Transition_9595CloseObjects1.length;i<l;++i) {
    if ( gdjs.EndCode.GDIris_9595Transition_9595CloseObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.EndCode.GDIris_9595Transition_9595CloseObjects1[k] = gdjs.EndCode.GDIris_9595Transition_9595CloseObjects1[i];
        ++k;
    }
}
gdjs.EndCode.GDIris_9595Transition_9595CloseObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDBackgroundObjects1.length = 0;
gdjs.EndCode.GDBackgroundObjects2.length = 0;
gdjs.EndCode.GDBackgroundObjects3.length = 0;
gdjs.EndCode.GDDialogue_9595BoxObjects1.length = 0;
gdjs.EndCode.GDDialogue_9595BoxObjects2.length = 0;
gdjs.EndCode.GDDialogue_9595BoxObjects3.length = 0;
gdjs.EndCode.GDIris_9595TransitionObjects1.length = 0;
gdjs.EndCode.GDIris_9595TransitionObjects2.length = 0;
gdjs.EndCode.GDIris_9595TransitionObjects3.length = 0;
gdjs.EndCode.GDDialogueObjects1.length = 0;
gdjs.EndCode.GDDialogueObjects2.length = 0;
gdjs.EndCode.GDDialogueObjects3.length = 0;
gdjs.EndCode.GDIris_9595Transition_9595CloseObjects1.length = 0;
gdjs.EndCode.GDIris_9595Transition_9595CloseObjects2.length = 0;
gdjs.EndCode.GDIris_9595Transition_9595CloseObjects3.length = 0;

gdjs.EndCode.eventsList2(runtimeScene);
gdjs.EndCode.GDBackgroundObjects1.length = 0;
gdjs.EndCode.GDBackgroundObjects2.length = 0;
gdjs.EndCode.GDBackgroundObjects3.length = 0;
gdjs.EndCode.GDDialogue_9595BoxObjects1.length = 0;
gdjs.EndCode.GDDialogue_9595BoxObjects2.length = 0;
gdjs.EndCode.GDDialogue_9595BoxObjects3.length = 0;
gdjs.EndCode.GDIris_9595TransitionObjects1.length = 0;
gdjs.EndCode.GDIris_9595TransitionObjects2.length = 0;
gdjs.EndCode.GDIris_9595TransitionObjects3.length = 0;
gdjs.EndCode.GDDialogueObjects1.length = 0;
gdjs.EndCode.GDDialogueObjects2.length = 0;
gdjs.EndCode.GDDialogueObjects3.length = 0;
gdjs.EndCode.GDIris_9595Transition_9595CloseObjects1.length = 0;
gdjs.EndCode.GDIris_9595Transition_9595CloseObjects2.length = 0;
gdjs.EndCode.GDIris_9595Transition_9595CloseObjects3.length = 0;


return;

}

gdjs['EndCode'] = gdjs.EndCode;
