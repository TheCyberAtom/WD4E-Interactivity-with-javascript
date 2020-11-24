function billingFunction(){
	var res=document.getElementById('same').checked;
	if(res==true)
	{
		var name=document.getElementById('shippingName').value;
		var zip=document.getElementById('shippingZip').value;
		
		document.getElementById('billingName').value=name;
		document.getElementById('billingZip').value=zip;
	}
	else
	{
		document.getElementById('billingName').value="";
		document.getElementById('billingZip').value="";
	}
}