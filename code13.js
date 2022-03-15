gdjs.QuizCode = {};
gdjs.QuizCode.GDSAES_95balitaObjects1= [];
gdjs.QuizCode.GDSAES_95balitaObjects2= [];
gdjs.QuizCode.GDSAES_95balitaObjects3= [];
gdjs.QuizCode.GDplay_95pauseObjects1= [];
gdjs.QuizCode.GDplay_95pauseObjects2= [];
gdjs.QuizCode.GDplay_95pauseObjects3= [];
gdjs.QuizCode.GDforwardObjects1= [];
gdjs.QuizCode.GDforwardObjects2= [];
gdjs.QuizCode.GDforwardObjects3= [];
gdjs.QuizCode.GDbackwardObjects1= [];
gdjs.QuizCode.GDbackwardObjects2= [];
gdjs.QuizCode.GDbackwardObjects3= [];

gdjs.QuizCode.conditionTrue_0 = {val:false};
gdjs.QuizCode.condition0IsTrue_0 = {val:false};
gdjs.QuizCode.condition1IsTrue_0 = {val:false};
gdjs.QuizCode.condition2IsTrue_0 = {val:false};
gdjs.QuizCode.conditionTrue_1 = {val:false};
gdjs.QuizCode.condition0IsTrue_1 = {val:false};
gdjs.QuizCode.condition1IsTrue_1 = {val:false};
gdjs.QuizCode.condition2IsTrue_1 = {val:false};


gdjs.QuizCode.mapOfGDgdjs_46QuizCode_46GDplay_9595pauseObjects1Objects = Hashtable.newFrom({"play_pause": gdjs.QuizCode.GDplay_95pauseObjects1});gdjs.QuizCode.eventsList0 = function(runtimeScene) {

{


gdjs.QuizCode.condition0IsTrue_0.val = false;
{
{gdjs.QuizCode.conditionTrue_1 = gdjs.QuizCode.condition0IsTrue_0;
gdjs.QuizCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(58831300);
}
}if (gdjs.QuizCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


};gdjs.QuizCode.mapOfGDgdjs_46QuizCode_46GDplay_9595pauseObjects1Objects = Hashtable.newFrom({"play_pause": gdjs.QuizCode.GDplay_95pauseObjects1});gdjs.QuizCode.mapOfGDgdjs_46QuizCode_46GDplay_9595pauseObjects1Objects = Hashtable.newFrom({"play_pause": gdjs.QuizCode.GDplay_95pauseObjects1});gdjs.QuizCode.mapOfGDgdjs_46QuizCode_46GDforwardObjects2Objects = Hashtable.newFrom({"forward": gdjs.QuizCode.GDforwardObjects2});gdjs.QuizCode.eventsList1 = function(runtimeScene) {

{


gdjs.QuizCode.condition0IsTrue_0.val = false;
{
gdjs.QuizCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.QuizCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.QuizCode.GDSAES_95balitaObjects2);
{for(var i = 0, len = gdjs.QuizCode.GDSAES_95balitaObjects2.length ;i < len;++i) {
    gdjs.QuizCode.GDSAES_95balitaObjects2[i].setCurrentTime((gdjs.QuizCode.GDSAES_95balitaObjects2[i].getCurrentTime()) + 10);
}
}}

}


};gdjs.QuizCode.mapOfGDgdjs_46QuizCode_46GDforwardObjects2Objects = Hashtable.newFrom({"forward": gdjs.QuizCode.GDforwardObjects2});gdjs.QuizCode.mapOfGDgdjs_46QuizCode_46GDbackwardObjects2Objects = Hashtable.newFrom({"backward": gdjs.QuizCode.GDbackwardObjects2});gdjs.QuizCode.eventsList2 = function(runtimeScene) {

{


gdjs.QuizCode.condition0IsTrue_0.val = false;
{
gdjs.QuizCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.QuizCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.QuizCode.GDSAES_95balitaObjects2);
{for(var i = 0, len = gdjs.QuizCode.GDSAES_95balitaObjects2.length ;i < len;++i) {
    gdjs.QuizCode.GDSAES_95balitaObjects2[i].setCurrentTime((gdjs.QuizCode.GDSAES_95balitaObjects2[i].getCurrentTime()) - 10);
}
}}

}


};gdjs.QuizCode.mapOfGDgdjs_46QuizCode_46GDbackwardObjects1Objects = Hashtable.newFrom({"backward": gdjs.QuizCode.GDbackwardObjects1});gdjs.QuizCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("forward"), gdjs.QuizCode.GDforwardObjects2);

gdjs.QuizCode.condition0IsTrue_0.val = false;
{
gdjs.QuizCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.QuizCode.mapOfGDgdjs_46QuizCode_46GDforwardObjects2Objects, runtimeScene, true, false);
}if (gdjs.QuizCode.condition0IsTrue_0.val) {
/* Reuse gdjs.QuizCode.GDforwardObjects2 */
{for(var i = 0, len = gdjs.QuizCode.GDforwardObjects2.length ;i < len;++i) {
    gdjs.QuizCode.GDforwardObjects2[i].setOpacity(255);
}
}
{ //Subevents
gdjs.QuizCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("forward"), gdjs.QuizCode.GDforwardObjects2);

gdjs.QuizCode.condition0IsTrue_0.val = false;
{
gdjs.QuizCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.QuizCode.mapOfGDgdjs_46QuizCode_46GDforwardObjects2Objects, runtimeScene, true, true);
}if (gdjs.QuizCode.condition0IsTrue_0.val) {
/* Reuse gdjs.QuizCode.GDforwardObjects2 */
{for(var i = 0, len = gdjs.QuizCode.GDforwardObjects2.length ;i < len;++i) {
    gdjs.QuizCode.GDforwardObjects2[i].setOpacity(50);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backward"), gdjs.QuizCode.GDbackwardObjects2);

gdjs.QuizCode.condition0IsTrue_0.val = false;
{
gdjs.QuizCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.QuizCode.mapOfGDgdjs_46QuizCode_46GDbackwardObjects2Objects, runtimeScene, true, false);
}if (gdjs.QuizCode.condition0IsTrue_0.val) {
/* Reuse gdjs.QuizCode.GDbackwardObjects2 */
{for(var i = 0, len = gdjs.QuizCode.GDbackwardObjects2.length ;i < len;++i) {
    gdjs.QuizCode.GDbackwardObjects2[i].setOpacity(255);
}
}
{ //Subevents
gdjs.QuizCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("backward"), gdjs.QuizCode.GDbackwardObjects1);

gdjs.QuizCode.condition0IsTrue_0.val = false;
{
gdjs.QuizCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.QuizCode.mapOfGDgdjs_46QuizCode_46GDbackwardObjects1Objects, runtimeScene, true, true);
}if (gdjs.QuizCode.condition0IsTrue_0.val) {
/* Reuse gdjs.QuizCode.GDbackwardObjects1 */
{for(var i = 0, len = gdjs.QuizCode.GDbackwardObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDbackwardObjects1[i].setOpacity(50);
}
}}

}


};gdjs.QuizCode.eventsList4 = function(runtimeScene) {

{


gdjs.QuizCode.condition0IsTrue_0.val = false;
{
gdjs.QuizCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.QuizCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.QuizCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.QuizCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDSAES_95balitaObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.QuizCode.GDSAES_95balitaObjects1);

gdjs.QuizCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.QuizCode.GDSAES_95balitaObjects1.length;i<l;++i) {
    if ( gdjs.QuizCode.GDSAES_95balitaObjects1[i].isEnded() ) {
        gdjs.QuizCode.condition0IsTrue_0.val = true;
        gdjs.QuizCode.GDSAES_95balitaObjects1[k] = gdjs.QuizCode.GDSAES_95balitaObjects1[i];
        ++k;
    }
}
gdjs.QuizCode.GDSAES_95balitaObjects1.length = k;}if (gdjs.QuizCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "paglalapat", false);
}}

}


{


gdjs.QuizCode.condition0IsTrue_0.val = false;
{
gdjs.QuizCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.QuizCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.QuizCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.QuizCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDSAES_95balitaObjects1[i].play();
}
}}

}


{


gdjs.QuizCode.condition0IsTrue_0.val = false;
{
gdjs.QuizCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.QuizCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.QuizCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.QuizCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDSAES_95balitaObjects1[i].pause();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.QuizCode.GDplay_95pauseObjects1);

gdjs.QuizCode.condition0IsTrue_0.val = false;
gdjs.QuizCode.condition1IsTrue_0.val = false;
{
gdjs.QuizCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.QuizCode.mapOfGDgdjs_46QuizCode_46GDplay_9595pauseObjects1Objects, runtimeScene, true, false);
}if ( gdjs.QuizCode.condition0IsTrue_0.val ) {
{
gdjs.QuizCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.QuizCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.QuizCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.QuizCode.condition0IsTrue_0.val = false;
{
gdjs.QuizCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.QuizCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}}

}


{


gdjs.QuizCode.condition0IsTrue_0.val = false;
{
gdjs.QuizCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
}if (gdjs.QuizCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.QuizCode.GDplay_95pauseObjects1);
{for(var i = 0, len = gdjs.QuizCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDplay_95pauseObjects1[i].setAnimationName("play");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.QuizCode.GDplay_95pauseObjects1);

gdjs.QuizCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.QuizCode.GDplay_95pauseObjects1.length;i<l;++i) {
    if ( gdjs.QuizCode.GDplay_95pauseObjects1[i].isCurrentAnimationName("play") ) {
        gdjs.QuizCode.condition0IsTrue_0.val = true;
        gdjs.QuizCode.GDplay_95pauseObjects1[k] = gdjs.QuizCode.GDplay_95pauseObjects1[i];
        ++k;
    }
}
gdjs.QuizCode.GDplay_95pauseObjects1.length = k;}if (gdjs.QuizCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.QuizCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.QuizCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDSAES_95balitaObjects1[i].pause();
}
}}

}


{


gdjs.QuizCode.condition0IsTrue_0.val = false;
{
gdjs.QuizCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
}if (gdjs.QuizCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.QuizCode.condition0IsTrue_0.val = false;
{
gdjs.QuizCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.QuizCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.QuizCode.GDplay_95pauseObjects1);
{for(var i = 0, len = gdjs.QuizCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDplay_95pauseObjects1[i].setAnimationName("pause");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.QuizCode.GDplay_95pauseObjects1);

gdjs.QuizCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.QuizCode.GDplay_95pauseObjects1.length;i<l;++i) {
    if ( gdjs.QuizCode.GDplay_95pauseObjects1[i].isCurrentAnimationName("pause") ) {
        gdjs.QuizCode.condition0IsTrue_0.val = true;
        gdjs.QuizCode.GDplay_95pauseObjects1[k] = gdjs.QuizCode.GDplay_95pauseObjects1[i];
        ++k;
    }
}
gdjs.QuizCode.GDplay_95pauseObjects1.length = k;}if (gdjs.QuizCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.QuizCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.QuizCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDSAES_95balitaObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.QuizCode.GDplay_95pauseObjects1);

gdjs.QuizCode.condition0IsTrue_0.val = false;
{
gdjs.QuizCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.QuizCode.mapOfGDgdjs_46QuizCode_46GDplay_9595pauseObjects1Objects, runtimeScene, true, false);
}if (gdjs.QuizCode.condition0IsTrue_0.val) {
/* Reuse gdjs.QuizCode.GDplay_95pauseObjects1 */
{for(var i = 0, len = gdjs.QuizCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDplay_95pauseObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.QuizCode.GDplay_95pauseObjects1);

gdjs.QuizCode.condition0IsTrue_0.val = false;
{
gdjs.QuizCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.QuizCode.mapOfGDgdjs_46QuizCode_46GDplay_9595pauseObjects1Objects, runtimeScene, true, true);
}if (gdjs.QuizCode.condition0IsTrue_0.val) {
/* Reuse gdjs.QuizCode.GDplay_95pauseObjects1 */
{for(var i = 0, len = gdjs.QuizCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDplay_95pauseObjects1[i].setOpacity(100);
}
}}

}


{


gdjs.QuizCode.eventsList3(runtimeScene);
}


{


{
}

}


};

gdjs.QuizCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.QuizCode.GDSAES_95balitaObjects1.length = 0;
gdjs.QuizCode.GDSAES_95balitaObjects2.length = 0;
gdjs.QuizCode.GDSAES_95balitaObjects3.length = 0;
gdjs.QuizCode.GDplay_95pauseObjects1.length = 0;
gdjs.QuizCode.GDplay_95pauseObjects2.length = 0;
gdjs.QuizCode.GDplay_95pauseObjects3.length = 0;
gdjs.QuizCode.GDforwardObjects1.length = 0;
gdjs.QuizCode.GDforwardObjects2.length = 0;
gdjs.QuizCode.GDforwardObjects3.length = 0;
gdjs.QuizCode.GDbackwardObjects1.length = 0;
gdjs.QuizCode.GDbackwardObjects2.length = 0;
gdjs.QuizCode.GDbackwardObjects3.length = 0;

gdjs.QuizCode.eventsList4(runtimeScene);
return;

}

gdjs['QuizCode'] = gdjs.QuizCode;
