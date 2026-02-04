// Treasury balance endpoint
// Returns the current ETH balance of the treasury wallet

export const onRequestGet = async (context: any) => {
  try {
    // For now, return a static value
    // In production, this would query the blockchain
    const mockBalance = (Math.random() * 0.01 + 0.007).toFixed(4);
    
    return new Response(
      JSON.stringify({
        balance: mockBalance,
        currency: "ETH",
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch balance' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};