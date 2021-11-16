// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package anttable.proxies.microflows;

import java.util.HashMap;
import java.util.Map;
import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.MendixRuntimeException;
import com.mendix.systemwideinterfaces.core.IContext;

public class Microflows
{
	// These are the microflows for the AntTable module
	public static void act_Ramdom_TableDataItem(IContext context)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		Core.microflowCall("AntTable.Act_Ramdom_TableDataItem").withParams(params).execute(context);
	}
	public static void act_Table_Row_Select(IContext context, anttable.proxies.TableDataItem _tableDataItem)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		params.put("TableDataItem", _tableDataItem == null ? null : _tableDataItem.getMendixObject());
		Core.microflowCall("AntTable.Act_Table_Row_Select").withParams(params).execute(context);
	}
}