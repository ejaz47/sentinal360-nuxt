<?php

class RateLimitMiddleware
{
    private $maxRequests;
    private $interval;

    public function __construct($maxRequests = 5, $interval = 60)
    {
        $this->maxRequests = $maxRequests;
        $this->interval = $interval;
    }

    public function __invoke($request, $response, $next)
    {
        $clientIp = $request->getServerParam('REMOTE_ADDR');
        $key = "rate_limit:$clientIp";

        // Check if a request counter exists for the current client
        $requestCount = (int) apcu_fetch($key);

        // If the counter is not set, initialize it
        if (!$requestCount) {
            apcu_store($key, 1, $this->interval);
        } else {
            // If the counter is set, increment it
            $requestCount++;
            apcu_store($key, $requestCount, $this->interval);

            // If the number of requests exceeds the limit, return a 429 (Too Many Requests) response
            if ($requestCount > $this->maxRequests) {
                return $response->withStatus(429)
                                ->withHeader('Content-Type', 'application/json')
                                ->write(json_encode(['error' => 'Rate limit exceeded']));
            }
        }

        // Call the next middleware in the stack
        $response = $next($request, $response);

        return $response;
    }
}
