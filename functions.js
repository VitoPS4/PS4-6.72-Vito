var confirmJailbreak = true;
function jb_finished()
{
    if(main_ret == 179 || main_ret == 0)
    {
        alert("Jailbreak finished !");
    }
    else if(confirmJailbreak)
        alert("Problem ! Retry !");
	else
		alert("Jailbreak Skipped!! Start running Payloads !!");
}

function mira_finished()
{
	setTimeout(function(){alert("Mira Loaded | Click OK"); }, 10000);
	//setTimeout(function(){alert("Load Successful!!");}, 20000);
}

function payload_finished()
{
    alert("Load Successful!!");
}

function SC(x)
{
    return '<script src="'+x+'.js"></scr'+'ipt>';
}

function MIRA(x)
{
    return SC('mira/'+x);
}

function JB(x)
{
    return SC('jb/'+x);
}

function PAYLOAD(x)
{
    return SC('payloads/'+x);
}

function load_mira_nohb()
{
    document.write(MIRA('mira')+MIRA('miranohb')+MIRA('c-code')+'<script>mira_finished();</scr'+'ipt>');
	if(document.getElementById('table') == null){
		document.write('<table id="table" align="center" style="width:500px;margin-top:150px;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>Wait... Mira loading...\n<p>After : Mira Loaded. Click Ok and close the website. You can play all games 5.05 and other games with this Mira. @vdsm_vito</p></h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="" onclick="load_mira(); return false"></a>'+
						'<a href="" onclick="load_netcat(); return false"></a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1></h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'app2usb\'); return false"></a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'backup\'); return false"></a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'disableupdates\'); return false"></a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'enableupdates\'); return false"></a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'dumper\'); return false"></a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'kerneldumper\'); return false"></a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'enablebrowser\'); return false"></a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'fanthreshold\'); return false"></a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'ftp\'); return false"></a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'historyblocker\'); return false"></a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'kernelclock\'); return false"></a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'linuxloader\'); return false"></a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'restore\'); return false"></a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'rifrenamer\'); return false"></a></td>'+
						'</tr>'+
						'</table>');
	}
}

function load_JB()
{	
	confirmJailbreak = confirm("OK for launch the Jailbreak\nTips: Use 'Cancel' if Jailbreak is already launched !!")
	if(confirmJailbreak){
		document.write(JB('c-code')+'<script>jb_finished();</scr'+'ipt>');
	}
}

function load_netcat()
{
    document.write(MIRA('mira')+MIRA('c-code')+'<script>alert("Awaiting Payload !!");</scr'+'ipt>');
	if(document.getElementById('table') == null){
		document.write('<table id="table" align="center" style="width:500px;margin-top:150px;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>Vito PS4</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" onclick="load_mira(); return false">MIRA + HEN</a>'+
						'<a href="#" onclick="load_mira_nohb(); return false" style="padding-left:50px;padding-right:50px">MIRA No HB</a>'+
						'<a href="#" onclick="load_netcat(); return false">Bin Loader</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>Payloads</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'app2usb\'); return false">App2USB</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'backup\'); return false">BackUp</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'disableupdates\'); return false">Disable Updates</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'enableupdates\'); return false">Enable Updates</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'dumper\'); return false">Dumper</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'kerneldumper\'); return false">Kernel Dumper</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'enablebrowser\'); return false">Enable Browser</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'fanthreshold\'); return false">Fan Threshold</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'ftp\'); return false">FTP</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'historyblocker\'); return false">History Blocker</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'kernelclock\'); return false">Kernel Clock</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'linuxloader\'); return false">Linux Loader</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'restore\'); return false">Restore</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'rifrenamer\'); return false">RIF Renamer</a></td>'+
						'</tr>'+
						'</table>');
	}
}

function load_payload(payload)
{
    document.write(PAYLOAD('mira')+PAYLOAD(payload)+PAYLOAD('c-code')+'<script>payload_finished();</scr'+'ipt>');
	if(document.getElementById('table') == null){
		document.write('<table id="table" align="center" style="width:500px;margin-top:150px;">'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>Vito PS4 (Wait update and future relase for payload and new payload)</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" onclick="load_mira(); return false">MIRA + HEN</a>'+
						'<a href="#" onclick="load_mira_nohb(); return false" style="padding-left:50px;padding-right:50px">MIRA No HB</a>'+
						'<a href="#" onclick="load_netcat(); return false">Bin Loader</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>Payloads</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'app2usb\'); return false">App2USB</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'backup\'); return false">BackUp</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'disableupdates\'); return false">Disable Updates</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'enableupdates\'); return false">Enable Updates</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'dumper\'); return false">Dumper</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'kerneldumper\'); return false">Kernel Dumper</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'enablebrowser\'); return false">Enable Browser</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'fanthreshold\'); return false">Fan Threshold</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'ftp\'); return false">FTP</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'historyblocker\'); return false">History Blocker</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'kernelclock\'); return false">Kernel Clock</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'linuxloader\'); return false">Linux Loader</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'restore\'); return false">Restore</a></td>'+
						'<td align="center" width="50%"><a href="#" onclick="load_payload(\'rifrenamer\'); return false">RIF Renamer</a></td>'+
						'</tr>'+
						'</table>');
	}
}
