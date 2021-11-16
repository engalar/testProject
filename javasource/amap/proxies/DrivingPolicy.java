// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package amap.proxies;

public enum DrivingPolicy
{
	LEAST_TIME(new java.lang.String[][] { new java.lang.String[] { "en_US", "最快捷模式" } }),
	LEAST_FEE(new java.lang.String[][] { new java.lang.String[] { "en_US", "最经济模式" } }),
	LEAST_DISTANCE(new java.lang.String[][] { new java.lang.String[] { "en_US", "最短距离模式" } }),
	REAL_TRAFFIC(new java.lang.String[][] { new java.lang.String[] { "en_US", "考虑实时路况" } });

	private java.util.Map<java.lang.String, java.lang.String> captions;

	private DrivingPolicy(java.lang.String[][] captionStrings)
	{
		this.captions = new java.util.HashMap<java.lang.String, java.lang.String>();
		for (java.lang.String[] captionString : captionStrings)
			captions.put(captionString[0], captionString[1]);
	}

	public java.lang.String getCaption(java.lang.String languageCode)
	{
		if (captions.containsKey(languageCode))
			return captions.get(languageCode);
		return captions.get("en_US");
	}

	public java.lang.String getCaption()
	{
		return captions.get("en_US");
	}
}
