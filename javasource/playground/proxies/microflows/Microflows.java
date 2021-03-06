// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package playground.proxies.microflows;

import java.util.HashMap;
import java.util.Map;
import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.MendixRuntimeException;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public class Microflows
{
	// These are the microflows for the PlayGround module
	public static playground.proxies.L3 microflow(IContext context)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		IMendixObject result = (IMendixObject)Core.microflowCall("PlayGround.Microflow").withParams(params).execute(context);
		return result == null ? null : playground.proxies.L3.initialize(context, result);
	}
}